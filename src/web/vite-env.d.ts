/// <reference types="vite/client" />

// static‐asset imports
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.svg'

// imports with Vite query-strings
declare module '*.png?*'
declare module '*.jpg?*'
declare module '*.jpeg?*'
declare module '*.webp?*'
declare module '*.svg?*'

// handle JSON imports
declare module '*.json'

// handle imports with query-strings (e.g. ?w=...&format=...&as=src)
declare module '*?*' {
  const src: string
  export default src
}
