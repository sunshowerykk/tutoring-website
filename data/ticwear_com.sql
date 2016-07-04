-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-07-04 16:25:14
-- 服务器版本： 5.5.47-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticwear_com`
--
CREATE DATABASE IF NOT EXISTS `ticwear_com` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ticwear_com`;

-- --------------------------------------------------------

--
-- 表的结构 `tbl_slide`
--

DROP TABLE IF EXISTS `tbl_slide`;
CREATE TABLE IF NOT EXISTS `tbl_slide` (
  `id` tinyint(4) NOT NULL,
  `title` int(11) NOT NULL,
  `img` int(11) NOT NULL,
  `path` int(11) NOT NULL,
  `url` int(11) NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
