import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// Criação do Produto //
export async function createProduct(req: Request, res: Response) {
	try { // Tenta executar esse bloco
		const imagePath = req.file?.filename;
		const { name, description, price, category, ingredients } = req.body; // Pega os Componentes do Produto
		const product = await Product.create({ // Cria o Produto
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients:ingredients ? JSON.parse(ingredients): [],
		});

		res.status(201).json(product); // Envia o Produto Criado
	} catch (error) { // Se Ocorrer um Erro
		console.log(error); // Printa Erro
		res.sendStatus(500); // Printa o Status de Erro 500
	}
}