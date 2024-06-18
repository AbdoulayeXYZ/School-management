import { Router } from "express";
import StudentController from "../controllers/student.controller";

const router = Router();

router.post("/student", StudentController.createStudent);
router.get("/student", StudentController.getAllStudents);
router.get("/student/:id", StudentController.getStudentById);
router.put("/student/:id", StudentController.updateStudent);
router.delete("/student/:id", StudentController.deleteStudent);

export default router;
