import { createContext } from 'react';
import type { ToastContextType } from '@models/toast';


export const ToastContext = createContext<ToastContextType | undefined>(undefined);
