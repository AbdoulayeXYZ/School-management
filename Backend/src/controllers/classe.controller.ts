import { Request, Response } from "express";
import ClasseService from "../services/classe.service";

class ClasseController {
    async createClasse(req: Request, res: Response): Promise<void> {
        try {
            const classe = await ClasseService.createClasse(req.body);
            res.status(201).json(classe);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ error: err.message });
        }
    }

    async getAllClasses(req: Request, res: Response): Promise<void> {
        try {
            const classes = await ClasseService.getAllClasses();
            res.status(200).json(classes);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ error: err.message });
        }
    }

    async getClasseById(req: Request, res: Response): Promise<void> {
        try {
            const classe = await ClasseService.getClasseById(req.params.id);
            if (classe) {
                res.status(200).json(classe);
            } else {
                res.status(404).json({ message: "Classe not found" });
            }
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ error: err.message });
        }
    }

    async updateClasse(req: Request, res: Response): Promise<void> {
        try {
            const updatedClasse = await ClasseService.updateClasse(req.params.id, req.body);
            if (updatedClasse) {
                res.status(200).json(updatedClasse);
            } else {
                res.status(404).json({ message: "Classe not found" });
            }
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ error: err.message });
        }
    }

    async deleteClasse(req: Request, res: Response): Promise<void> {
        try {
            const deletedClasse = await ClasseService.deleteClasse(req.params.id);
            if (deletedClasse) {
                res.status(200).json({ message: "Classe deleted successfully" });
            } else {
                res.status(404).json({ message: "Classe not found" });
            }
        } catch (error) {
            const err = error as Error;
            res.status(500).json({ error: err.message });
        }
    }
}

export default new ClasseController();
