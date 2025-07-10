# Exemplo 3: Calcular o número de segundos de vida
puts <<DOC
    Quantos segundos de vida você já tem?
    Para calcular o número total de segundos de vida, multiplicamos:
    365 dias/ano * 24 horas/dia * 60 minutos/hora * 60 segundos/minuto * anos vividos
DOC

ANOS_VIVIDOS = 43 # Substitua pelo número de anos que você já viveu
DIAS_NO_ANO = 365
HORAS_NO_DIA = 24
MINUTOS_HORA = 60
SEGUNDOS_MINUTO = 60
segundos_de_vida = ANOS_VIVIDOS * DIAS_NO_ANO * HORAS_NO_DIA * MINUTOS_HORA * SEGUNDOS_MINUTO
puts segundos_de_vida