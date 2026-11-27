
import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable()
export class ProductosService {

    private productos: Producto[] = [
        {
            id: 1,
            nombre: 'Laptop',
            descripcion: 'Computadora portátil para trabajo y estudio.',
            precio: 18500,
            stock: 8,
            categoria: 'Tecnología',
            imagen: 'res://laptop',
            destacado: false
        },
        {
            id: 2,
            nombre: 'Mouse',
            descripcion: 'Mouse inalámbrico ergonómico.',
            precio: 350,
            stock: 25,
            categoria: 'Accesorios',
            imagen: 'res://mouse',
            destacado: false
        },
        {
            id: 3,
            nombre: 'Teclado',
            descripcion: 'Teclado mecánico con iluminación LED.',
            precio: 850,
            stock: 12,
            categoria: 'Accesorios',
            imagen: 'res://teclado',
            destacado: false
        },
        {
            id: 4,
            nombre: 'Monitor',
            descripcion: 'Monitor Full HD de 24 pulgadas.',
            precio: 4500,
            stock: 6,
            categoria: 'Tecnología',
            imagen: 'res://monitor',
            destacado: false
        },
        {
            id: 5,
            nombre: 'Audífonos',
            descripcion: 'Audífonos inalámbricos Bluetooth.',
            precio: 1200,
            stock: 15,
            categoria: 'Audio',
            imagen: 'res://audifonos',
            destacado: false
        }
    ];

    private siguienteId: number = 6;

    buscar(texto: string = ''): Producto[] {

        const filtro = texto.trim().toLowerCase();

        return this.productos.filter(producto =>
            producto.nombre.toLowerCase().includes(filtro)
        );
    }

    obtenerPorId(id: number): Producto | undefined {

        return this.productos.find(producto =>
            producto.id === id
        );
    }

    agregar(producto: Omit<Producto, 'id'>): Producto {

        const nuevoProducto: Producto = {
            ...producto,
            id: this.siguienteId++,
            destacado: producto.destacado ?? false
        };

        this.productos.push(nuevoProducto);

        return nuevoProducto;
    }

    actualizar(producto: Producto): boolean {

        const indice = this.productos.findIndex(
            p => p.id === producto.id
        );

        if (indice === -1) {
            return false;
        }

        this.productos[indice] = { ...producto };

        return true;
    }

    cambiarCategoria(id: number, categoria: string): boolean {

        const producto = this.obtenerPorId(id);

        if (!producto) {
            return false;
        }

        return this.actualizar({
            ...producto,
            categoria: categoria
        });
    }

    // Cambiar el estado de un producto destacado
    alternarDestacado(id: number): Producto | undefined {

        const producto = this.obtenerPorId(id);

        if (!producto) {
            return undefined;
        }

        const productoActualizado: Producto = {
            ...producto,
            destacado: !producto.destacado
        };

        this.actualizar(productoActualizado);

        return productoActualizado;
    }

    // Obtener únicamente los productos destacados
    obtenerDestacados(): Producto[] {

        return this.productos.filter(
            producto => producto.destacado === true
        );
    }

}
