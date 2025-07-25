import { ReactQueryDevtools } from '@tanstack/react-query-devtools' // importamos las herramientas de desarrollo de React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // importamos el proveedor de consultas de React Query
import { MyRouter } from './routers/router';



function App() {

  const queryClient = new QueryClient(); // creamos un cliente de consulta

  return (
    <QueryClientProvider client={queryClient}> {/* envolvemos nuestra aplicación con el proveedor de consultas */}
      <MyRouter /> {/* importamos nuestro enrutador */}
      <ReactQueryDevtools initialIsOpen={false} /> {/* habilitamos las herramientas de desarrollo de React Query */}
    </QueryClientProvider> 
  )
}

export default App
