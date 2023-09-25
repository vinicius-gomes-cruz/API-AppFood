import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// Criação da Categoria //
export async function createCategory(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		const {icon, name} = req.body; // Pega os Componentes da Categoria
		const category = await Category.create({icon, name}); // Cria a Categoria
		res.status(201).json(category); // Envia o Status 201
	} catch (error) { // Se Ocorrer um Erro
		console.log(error); // Printa Erro
		res.sendStatus(500); // Printa o Status de Erro 500
	}
}