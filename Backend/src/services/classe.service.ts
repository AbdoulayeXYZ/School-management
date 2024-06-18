import Classe, { IClasse } from "../models/classe.model";

class ClasseService {
    async createClasse(classeData: IClasse): Promise<IClasse> {
        const classe = new Classe(classeData);
        return await classe.save();
    }

    async getAllClasses(): Promise<IClasse[]> {
        return await Classe.find();
    }

    async getClasseById(id: string): Promise<IClasse | null> {
        return await Classe.findById(id);
    }

    async updateClasse(id: string, classeData: Partial<IClasse>): Promise<IClasse | null> {
        return await Classe.findByIdAndUpdate(id, classeData, { new: true });
    }

    async deleteClasse(id: string): Promise<IClasse | null> {
        return await Classe.findByIdAndDelete(id);
    }
}

export default new ClasseService();
