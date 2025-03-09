  import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
  import PostComponent from "./components/PostsComponent"
  
  const queryClient = new QueryClient()

  function App() {
    

    return (
      <>
      <QueryClientProvider client={queryClient}>
        <PostComponent />
      </QueryClientProvider>
        
      </>
    )
  }

  export default App;
