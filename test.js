import { calcularTotal, calcularpeso} from './index';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) })
  it ('comprar pan',()=>{
    equal(calcularTotal([{producto: "pan", precio: 1}]),1)
  })
  it ('comprar pan y leche',()=>{
    equal(calcularTotal([{producto: "pan", precio: 1},
    {producto:"leche", precio:1}]),2)
  })
  it ('comprar huevos',()=>{
    equal(calcularTotal([
    {producto:"huevo", precio:30, cantidad:12}]), 360)
  })
})

describe(('calculo del peso'),()=>{
 it('carrito vacío',()=>{equal(calcularpeso([]),0)}); 
 it ('comprar pan',()=>{
  equal(calcularpeso([{producto: "pan", peso: 80, cantidad: 2}]),160)
}) 
it ('comprar pan y leche',()=>{
  equal(calcularpeso([
  {producto:"huevo", peso:180, cantidad:12}]), 2160)
})
it ('comprar huevos',()=>{
  equal(calcularpeso([
  {producto:"huevo", peso:150, cantidad:12}]), 1800)
})
it ('pan',()=>{
  equal(calcularpeso([
  {producto:"pan", peso:80 }]), 80)
})

});

