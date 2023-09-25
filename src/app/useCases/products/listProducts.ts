import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// Listar os Produtos //
export async function listProducts(req: Request, res: Response) {
	try { // Tenta Executar esse Bloco
		const products = await Product.find(); // Pega os Produtos salvos

		res.json(products); // Envia os Produtos
	} catch (error) { // Se Ocorrer um Erro
		console.log(error); // Printa o Erro
		res.sendStatus(500); // Envia o Status de Erro 500
	}

}