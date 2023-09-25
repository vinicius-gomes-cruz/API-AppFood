import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Cancelamento do Pedido
export async function cancelOrder(req: Request, res: Response) {
	try { // Tenta executar esse Bloco
		const { orderId } = req.params; // Pega o ID do Pedido
		await Order.findByIdAndDelete(orderId); // Deleta o Pedido
		res.sendStatus(204); // Envia o status de 204
	} catch (error) { // Se ocorrer um Erro
		console.log(error); // Printa o Erro
		res.sendStatus(500); // Envia o Status 500
	}
}