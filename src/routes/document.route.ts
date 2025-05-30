// backend/src/routes/document.route.ts
import express from "express";
import { DocumentController } from "../controllers/document.controller";

const documentRouter = express.Router();
const documentController = new DocumentController();

documentRouter.post(
  "/generate-seminar-invitation",
  documentController.generateInvitationSeminar.bind(documentController)
);

documentRouter.post(
  "/generate-event-report",
  documentController.generateEventReport.bind(documentController)
);

export default documentRouter;
