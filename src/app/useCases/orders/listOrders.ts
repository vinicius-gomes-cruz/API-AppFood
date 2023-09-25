import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Lista os Pedidos //
export async function listOrders(req: Request, res: Response) {
	try { // Tenta executar esse bloco
		const orders = await Order.find() // Pega os Pedidos
			.sort({creatAt: 1})
			.populate('products.product');

		res.json(orders); // Envia o Pedido
	} catch (error) { // Se ocorrer um erro
		console.log(error); // Printa o Erro
		res.sendStatus(500); // Envia o status 500
	}

}