const express = require("express");
const res = require("express/lib/response");
const Ethnic = require("../models/Ethnic");
const Province = require("../models/Province");

class EthnicAndProvinceController {
  addEthnic(req, res, next) {
    Ethnic.findOne({
      ethnicid: req.body.ethnicid,
    })
      .then((data) => {
        if (data) {
          res.status(300).json("Dân tộc đã tồn tại");
        } else {
          Ethnic.create({
            ethnicid: req.body.ethnicid,
            ethnic_name: req.body.ethnic_name,
          })
            .then(res.status(200).json("Thêm dân tộc thành công"))
            .catch((err) => {
              res.status(500).json("Lỗi Server");
            });
        }
      })
      .catch((err) => {
        res.status(500).json("Lỗi Server");
      });
  }

  removeEthnic(req, res, next) {
    Ethnic.findOneAndDelete({
      ethnicid: req.body.ethnicid,
    }).then((data) => {
      res.status(200).json(`Xoá dân tộc ${data.ethnic_name} thành công`);
    });
  }

  addProvince(req, res, next) {
    Province.findOne({
      provinceid: req.body.provinceid,
    })
      .then((data) => {
        if (data) {
          res.status(300).json("Dân tộc đã tồn tại");
        } else {
          Province.create({
            provinceid: req.body.provinceid,
            province_name: req.body.province_name,
          })
            .then(res.status(200).json("Thêm dân tộc thành công"))
            .catch((err) => {
              res.status(500).json("Lỗi Server");
            });
        }
      })
      .catch((err) => {
        res.status(500).json("Lỗi Server");
      });
  }

  removeProvince(req, res, next) {
    Province.findOneAndDelete({
      provinceid: req.body.provinceid,
    }).then((data) => {
      res.status(200).json(`Xoá dân tộc ${data.province_name} thành công`);
    });
  }
}
module.exports = new EthnicAndProvinceController();
