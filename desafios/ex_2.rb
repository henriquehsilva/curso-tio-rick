# Exemplo 2: Calcular o número de minutos em uma década
puts <<HEREDOC
    Quantos minutos tem uma década? 
    Uma década tem 10 anos, e cada ano tem 365 dias. 
    Portanto, para calcular o número total de minutos em uma década, multiplicamos:
    10 anos/década * 365 dias/ano * 24 horas/dia * 60 minutos/hora = 5.256.000 minutos/década
HEREDOC

ANOS_NA_DECAD = 10
DIAS_NO_ANO = 365
HORAS_NO_DIA = 24
MINUTOS_HORA = 60
minutos_na_decada = ANOS_NA_DECAD * DIAS_NO_ANO * HORAS_NO_DIA * MINUTOS_HORA
puts minutos_na_decada