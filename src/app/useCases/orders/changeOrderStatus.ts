import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// Muda o Status do Pedido
export async function changeOrderStatus(req: Request, res: Response) {
	try {
		const { orderId } = req.params; // Pega o ID do Pedido
		const { status } = req.body; // Pega o Status do Pedido

		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){ // Se o Status não for nenhum desses
			return res.status(400).json({ // Envia o status 400
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
			});
		}
		await Order.findByIdAndUpdate(orderId, { status }); // Muda o Status do Pedido
		res.sendStatus(204); // Envia o status 204
	} catch (error) { // Se ocorrer um erro
		console.log(error); // Printa o Erro
		res.sendStatus(500); // Envia o Status 500
	}
}