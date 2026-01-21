# 🏗️ Feature-First Architecture - Nexus AI

Documentación completa de la arquitectura **Feature-First** implementada para **Nexus AI**, optimizada para desarrollo asistido por IA, escalabilidad y mantenimiento a largo plazo.

## 📋 Overview

La arquitectura **Feature-First** organiza el código por funcionalidades de negocio (features) en lugar de por capas técnicas. Cada feature es un módulo autocontenido con sus propios componentes, hooks, servicios y tipos.

### 🎯 Beneficios Clave

-   **Contexto Completo**: Todo el código relacionado con una funcionalidad vive en un solo directorio.
-   **IA-Optimized**: Los asistentes de IA (como Claude) pueden ingerir el contexto completo de una feature sin navegar por todo el árbol de archivos.
-   **Escalabilidad Modular**: Añadir nuevas capacidades (ej. "Voice Chat") no afecta el código existente.
-   **Desacoplamiento**: Facilita el refactoring y el testing aislado.

## 🏛️ Estructura de Directorios

Esta es la estructura canónica del proyecto. Aunque algunas secciones legacy pueden vivir en `components/sections`, todo desarrollo nuevo debe seguir este patrón.

```
src/
├── app/                           # Next.js App Router (Rutas)
│   ├── (auth)/                    # Rutas de autenticación (login, register)
│   ├── (main)/                    # Rutas principales (dashboard, chat)
│   ├── api/                       # API Routes (Next.js backend handlers)
│   ├── layout.tsx                 # Root layout con Providers globales
│   ├── page.tsx                   # Landing Page principal
│   └── globals.css                # Sistema de diseño global (Tailwind)
│
├── features/                      # 🎯 Features (Módulos de Negocio)
│   ├── auth/                      # Feature: Autenticación ✅
│   │   ├── components/            # LoginForm, RegisterForm, AuthGuard
│   │   ├── hooks/                 # useAuth, useSession
│   │   ├── services/              # authService (Supabase integration)
│   │   ├── types/                 # UserUser, Session, AuthError
│   │   └── store/                 # authStore (Zustand)
│   │
│   ├── chat/                      # Feature: AI Chat Interface ✅
│   │   ├── components/            # ChatWidget, MessageList, InputArea
│   │   ├── hooks/                 # useChat, useStreamResponse
│   │   ├── services/              # openAiService, historyService
│   │   ├── types/                 # Message, Conversation, ModelConfig
│   │   └── index.ts               # Public API
│   │
│   └── pricing/                   # Feature: Pricing & Subscription
│       ├── components/            # PricingCard, PlanSelector
│       └── ...
│
└── shared/                        # 🚀 Herramientas Compartidas
    ├── components/                # UI Kit Base (Button, Card, Input)
    ├── hooks/                     # useDebounce, useLocalStorage
    ├── stores/                    # appStore.ts (Estado global UI)
    ├── types/                     # Tipos universales (ApiResponse, etc.)
    ├── utils/                     # Helpers puros (date formatting, validators)
    └── lib/                       # Configuración de librerías (supabase, axios)
```

## 🎯 Feature Structure Pattern

Cada directorio dentro de `src/features/` debe seguir estrictamente esta estructura interna:

```
src/features/[feature-name]/
├── components/           # 🧩 UI Components (Visual)
├── hooks/               # 🎣 Logic Hooks (Estado local, efectos)
├── services/            # 🔌 Data Fetching (API calls, Integraciones)
├── types/               # 📝 TypeScript Interfaces (Dominio)
├── store/               # 💾 Zustand Store (Solo si es complejo)
└── index.ts             # 📤 Public Export (Barrier file)
```

### 1. Components - UI Layer
Componentes puros, preferiblemente presentacionales.

**Ejemplo - `ChatWidget.tsx`**:
```typescript
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useChat } from '../hooks/useChat';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

export const ChatWidget = memo(() => {
  const { messages, sendMessage, isLoading } = useChat();

  return (
    <motion.div className="nexus-card h-[600px] flex flex-col">
      <MessageList messages={messages} />
      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </motion.div>
  );
});
```

### 2. Hooks - Logic Layer
Encapsulan la lógica de negocio y estado local.

**Ejemplo - `useChat.ts`**:
```typescript
import { useState, useCallback } from 'react';
import { chatService } from '../services/chatService';
import { Message } from '../types/chat';

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    
    const sendMessage = useCallback(async (text: string) => {
        // Optimistic update
        const userMsg = { role: 'user', content: text };
        setMessages(prev => [...prev, userMsg]);
        
        try {
            const response = await chatService.send(text);
            setMessages(prev => [...prev, response]);
        } catch (error) {
            console.error('Chat error', error);
        }
    }, []);

    return { messages, sendMessage };
};
```

### 3. Services - Data Layer
Interacción con APIs externas (OpenAI, Supabase, etc.).

**Ejemplo - `chatService.ts`**:
```typescript
import { supabase } from '@/shared/lib/supabase';
import { Message } from '../types/chat';

export const chatService = {
  async send(text: string): Promise<Message> {
    const { data, error } = await supabase.functions.invoke('chat-completion', {
        body: { prompt: text }
    });
    if (error) throw error;
    return data.message;
  }
};
```

### 4. Index File - Public API
Define qué partes de la feature son accesibles para el resto de la aplicación. Esto previene el acoplamiento excesivo.

**Ejemplo - `index.ts`**:
```typescript
// ✅ Public API
export { ChatWidget } from './components/ChatWidget';
export { useChat } from './hooks/useChat';
export type { Message } from './types/chat';

// ❌ INTERNAL IMPLEMENTATION DETAILS (Do not export)
// export { InternalHelper } from './utils/helper';
```

## 🔄 Comunicación entre Features

### 1. Estado Global (Shared)
Usar `appStore.ts` en `shared/stores` para datos que realmente necesitan ser globales (Usuario autenticado, Preferencias de UI, Notificaciones globales).

### 2. Composition (Props)
Preferir pasar datos vía props cuando una feature contiene a otra.
```tsx
<DashboardLayout>
    <ChatFeature user={currentUser} />
</DashboardLayout>
```

## 📏 Métricas de Calidad

*   **Tipado Estricto**: No usar `any`. Definir interfaces claras en `types/`.
*   **Single Responsibility**: Si un componente supera las 200 líneas, probablemente debe dividirse.
*   **Colocación**: Si una función solo se usa en `features/auth`, debe vivir en `features/auth/utils`, no en `shared/utils`.

---
**Feature-First Architecture v2.0** | Nexus AI 🤖
*Esta arquitectura prioriza la modularidad para permitir un desarrollo acelerado con Asistentes de IA.*