import { useState, useEffect } from "react";

export function useLocalStorage() {
    // const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) ??''))
    // const value:x = localStorage.getItem(item)
    

    // const updateLocalStorage = (newValue: e) =>{
    //     setValue(newValue);
    //     localStorage.setItem(item,JSON.stringify(newValue));
    // }

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Função para buscar a quantidade de itens no localStorage
        const getCartCount = (): void => {
          const cartItems = localStorage.getItem('cartItems');
          if (cartItems) {
            const parsedCartItems: any[] = JSON.parse(cartItems);
            setCartCount(parsedCartItems.length);
          }
        };
    
        getCartCount(); // Chamada inicial para obter a contagem atual
    
        // Atualiza a contagem sempre que o localStorage for modificado
        window.addEventListener('storage', getCartCount);
    
        // Limpa o event listener quando o componente for desmontado
        return () => {
          window.removeEventListener('storage', getCartCount);
        };
      }, []);

    
    return{
        cartCount,
        // updateLocalStorage
    }
}
