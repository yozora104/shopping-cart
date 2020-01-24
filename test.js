import { calcularTotal} from './index';
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
})
