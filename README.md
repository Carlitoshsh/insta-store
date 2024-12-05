# 🥝 kiwiStore

## Cómo ejecutar

Se utiliza Next.js ya que es recomendado usar un framework con React (ver en [react.dev](https://react.dev/learn/start-a-new-react-project)). Este es un proyecto [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Desarrollo
Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.js`. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Red Hat Display, una fuente personalizada de Google.

### Version para publicar
Ejecuta el comando para publicar:

```bash
npm run build
```

Esto producira la carpeta `out`, la cual genera los archivos estáticos. Para correr un servidor local de esta carpeta, utiliza el siguiente comando:

```bash
npx serve out
```

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es utilizando la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.
