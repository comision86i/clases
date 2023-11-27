package main

import "fmt"

func main() {
	var horasTrabajadas, costoHora, sueldo int

	fmt.Print("Ingrese la cantidad de horas trabajadas: ")
	fmt.Scan(&horasTrabajadas)
	fmt.Print("Ingrese el costo por hora: ")
	fmt.Scan(&costoHora)

	sueldo = horasTrabajadas * costoHora

	fmt.Print("El sueldo del empleado es: ", sueldo)
}
