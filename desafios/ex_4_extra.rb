# Exemplo 4 - Extra
puts <<HEREDOC
    Se alguém tem 1.390.000.000 segundos de vida, qual seria a idade dessa pessoa em anos?
    Para calcular a idade em anos a partir do número de segundos de vida, podemos usar a seguinte fórmula:
    idade_em_anos = segundos_de_vida / (365 dias/ano * 24 horas/dia * 60 minutos/hora * 60 segundos/minuto)
HEREDOC

DIAS_NO_ANO = 365
HORAS_NO_DIA = 24
MINUTOS_HORA = 60
SEGUNDOS_MINUTO = 60

segundos_de_vida = 1_390_000_000

idade_em_anos = segundos_de_vida / (DIAS_NO_ANO * HORAS_NO_DIA * MINUTOS_HORA * SEGUNDOS_MINUTO)

puts idade_em_anos
