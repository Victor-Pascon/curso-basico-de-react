import { useState } from "react"

/**
 * Componente Funcional (Functional Component)
 * Esta função representa um componente React.
 * O nome "App" geralmente é usado para o componente principal da aplicação.
 * Componentes funcionais são, em essência, funções JavaScript que retornam JSX.
 */
function App() {

  /**
   * Hook useState
   * O useState é um Hook que permite adicionar e gerenciar o "estado" (memória) em componentes funcionais.
   * Ele retorna um array com exatamente dois valores:
   * 1. A variável de estado atual (neste caso, 'contador').
   * 2. A função para atualizar esse estado (neste caso, 'setContador').
   * 
   * Sintaxe: const [valor, setValor] = useState(valorInicial);
   * - O argumento '0' é o valor inicial do contador.
   * - Usamos desestruturação de array (os colchetes []) para extrair o valor e a função de atualização.
   */
  const [contador, setContador] = useState(0)

  /**
   * O retorno da função (JSX)
   * O componente deve retornar o que será exibido na tela.
   * Embora pareça HTML, isso é JSX (JavaScript XML), uma extensão de sintaxe do JavaScript.
   * O navegador não entende JSX nativamente; ferramentas como o Vite/Babel o transformam em JavaScript puro.
   */
  return (
    // Fragment (<>...</>):
    // No React, o retorno deve ter apenas um elemento "pai".
    // O Fragment serve para agrupar múltiplos elementos filhos sem adicionar um nó extra (como uma <div>) ao DOM final.
    <>
      {/* Correção de "Hello Word" para "Hello World" */}
      <p>Hello World</p>

      {/* 
                Botão com Evento onClick:
                - onClick é o evento que detecta quando o usuário clica no botão.
                - Passamos uma "arrow function" () => ... para ser executada no clique.
                - setContador(contador + 1) atualiza o estado.
                - IMPORTANTE: Sempre que o estado muda (via setContador), o React executa a função App() novamente (re-renderização),
                  atualizando a interface com o novo valor.
             */}
      <button onClick={() => setContador(contador + 1)}>
        Contador {contador}
      </button>
    </>
  )
}

export default App
