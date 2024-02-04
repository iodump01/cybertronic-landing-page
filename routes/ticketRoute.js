const express = require("express");
const {
  newTicket,
  getAllTickets,
  deleteTicket,
  searchTicket,
} = require("../controllers/ticketController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/ticket").post(newTicket)
router.route('/ticket/:id').get(searchTicket);

router
  .route("/admin/ticket")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllTickets)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTicket);

module.exports = router;
