import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// Lista os Produtos por Categoria //
export async function listProductsByCategory(req: Request, res: Response) {
	try { // Tenta executar o Bloco
		const {categoryId} = req.params; // Pega o id da Categoria

		const products = await Product.find().where('category').equals(categoryId); // Procura o Produto que tem o ID a categoria do ID

		res.json(products); // Envia o Produto
	} catch (error) { // Se ocorrer um Rrro
		console.log(error); // Printa o Erro
		res.sendStatus(500); // Envia o Status de Erro 500
	}

}