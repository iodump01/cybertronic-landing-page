const Ticket = require("../models/ticketModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const QRCode = require("qrcode");
const generateNumber = require("../utils/generateUnique");
const sendEmail = require("../utils/sendEmail");
const path = require("path");
// Create new ticket
exports.newTicket = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body);
  const {
    name,
    mobile,
    email,
    college,
    department,
    className,
    address,
  } = req.body;

  // Generate unique ticketId
  const idCheck = async () => {
    let refernceNo = generateNumber("integer", 10);
    const referenced = await Ticket.find({
      ticketId: refernceNo,
    }).countDocuments();
    if (referenced > 0) {
      return false;
    }
    return refernceNo;
  };
  var ticketId;
  while (true) {
    var ticketNumber = await idCheck();
    ticketId = ticketNumber;
    if (ticketNumber) break;
  }

  //qr code setting
  const opts = {
    errorCorrectionLevel: "H",
    type: "terminal",
    quality: 0.95,
    margin: 1,
    color: {
      dark: "#208698",
      light: "#FFF",
    },
  };
  let data = {
    ticketId,
    name: capitalizeFirstLetter(name),
  };
  let stringdata = JSON.stringify(data);

  let pathName = path.join(
    __dirname + `../../frontend/build/images/${ticketId}qr.png`
  );

  await QRCode.toFile(pathName, stringdata);

  const ticket = await Ticket.create({
    ticketId,
    name: capitalizeFirstLetter(name),
    mobile,
    email: email.toLowerCase(),
    college: capitalizeFirstLetter(college),
    department: capitalizeFirstLetter(department),
    className: capitalizeFirstLetter(className),
    address: capitalizeFirstLetter(address),
    qrCode: `${ticketId}qr.png`,
  });

  //send email
  const message = {
    name: ticket.name,
    college: ticket.college,
    qr: `${ticketId}qr.png`,
    ticketId: ticket.ticketId,
  };

  await sendEmail({
    email,
    subject: 'Cyber Tronic Event Ticket',
    message,
  });

  res.status(201).json({
    success: true,
    ticket,
  });
});

// get Single ticket
exports.searchTicket = catchAsyncErrors(async (req, res, next) => {
  const ticket = await Ticket.findOne({ email: req.params.id });

  if (!ticket) {
    return next(new ErrorHandler("Ticket not found with this email", 404));
  }

  res.status(200).json({
    success: true,
    ticket,
  });
});

// get all ticket -- Admin
exports.getAllTickets = catchAsyncErrors(async (req, res, next) => {
  const ticket = await Ticket.find();

  res.status(200).json({
    success: true,
    ticket,
  });
});

// delete Ticket -- Admin
exports.deleteTicket = catchAsyncErrors(async (req, res, next) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  await ticket.remove();

  res.status(200).json({
    success: true,
  });
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
