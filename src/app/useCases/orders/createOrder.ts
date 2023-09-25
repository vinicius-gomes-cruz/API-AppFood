import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Cria o Pedido //
export async function createOrder(req: Request, res: Response) {
	try { // Tenta executar o Bloco
		const {table, products} = req.body; // Pega a Tabela e os Produtos do pedido

		const order = await Order.create({ table, products }); // Cria o Pedido
		res.status(201).json(order); // Envia o status 201
	} catch (error) { // se Ocorrer um erro
		console.log(error); // Printa o Erro
		res.sendStatus(500); // Envia o Status 500
	}
}