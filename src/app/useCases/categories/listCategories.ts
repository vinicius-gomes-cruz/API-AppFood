import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// Listar as Categorias //
export async function listCategories(req: Request, res: Response) {
	try {
		const categories = await Category.find(); // Pega as Categorias Salvas

		res.json(categories); // Envia as Categorias
	} catch (error) {
		console.log(error); // Printa o Erro
		res.sendStatus(500); // Evia o Status de Erro 500
	}
}