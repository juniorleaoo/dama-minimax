# Jogo de dama

O jogo de damas implementado inteiramente em JavaScript. 
Para a AI é utilizado o algoritmo Minimax.

# Minimax



```
ROTINA minimax(nó, profundidade)
    SE nó é um nó terminal OU profundidade = 0 ENTÃO
        RETORNE o valor da heurística do nó
    SENÃO SE o nó representa a jogada de algum adversário ENTÃO
        α ← +∞
        PARA CADA filho DE nó
            α ← min(α, minimax(filho, profundidade-1))
        FIM PARA
        RETORNE α
    SENÃO
        α ← -∞
        PARA CADA filho DE nó
            α ← max(α, minimax (filho, profundidade-1))
        FIM PARA
        RETORNE α
    FIM SE
FIM ROTINA

Fonte: [Wikipedia](https://pt.wikipedia.org/wiki/Minimax)
```