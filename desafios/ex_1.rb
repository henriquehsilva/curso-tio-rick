# Exemplo 1: Calcular o número de horas em um ano
puts <<HEREDOC
    Quantas horas tem um ano? 
    Um ano tem 365 dias, e cada dia tem 24 horas. 
    Portanto, para calcular o número total de horas em um ano, multiplicamos:
    365 dias/ano * 24 horas/dia = 8.760 horas/ano
HEREDOC

# calcule usando ruby simples e use constantes em portugues
DIAS_NO_ANO = 365
HORAS_NO_DIA = 24
horas_no_ano = DIAS_NO_ANO * HORAS_NO_DIA
puts horas_no_ano
