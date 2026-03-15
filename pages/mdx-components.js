const components = {
    h1: ({ children }) => (
        <h1 className="text-2xl">{children}</h1>
    ),
}

export function useMDXComponents() {
    return components
}