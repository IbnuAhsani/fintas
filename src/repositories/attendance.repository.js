const AttendanceModel = require("../models/attendance.model");

const insert = async attendanceObj => AttendanceModel.create(attendanceObj);

const readAll = async () => AttendanceModel.find().sort({ createdAt: "desc" });

const readUser = async userId =>
  AttendanceModel.find({ userId }).sort({ createdAt: "desc" });

module.exports = { insert, readAll, readUser };
