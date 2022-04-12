-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2022 a las 22:51:45
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `musica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artists`
--

CREATE TABLE `artists` (
  `ID` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `band` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `Age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `artists`
--

INSERT INTO `artists` (`ID`, `FirstName`, `LastName`, `band`, `country`, `Age`) VALUES
(1, 'Gustavo', 'Cerati', 'Soda Stereo', 'argentina', 36),
(2, 'Chris', 'Martins', 'Coldplay', 'EE UU', 31);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `album` varchar(100) NOT NULL,
  `duracion` varchar(50) NOT NULL,
  `genero` varchar(100) NOT NULL,
  `imagen` varchar(1000) NOT NULL,
  `linkyoutube` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `titulo`, `autor`, `album`, `duracion`, `genero`, `imagen`, `linkyoutube`) VALUES
(1, 'Ruleta', 'Los Piojos', 'Verde paisaje del infierno', '4:17', 'Rock Nacional', 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/c2/ee/4a/c2ee4ad6-0520-9582-89ed-b8648452d999/0656291178722.jpg/400x400cc.jpg', 'https://www.youtube.com/watch?v=Yn28dEOMe0U'),
(2, 'De Musica Ligera', 'Soda Stereo', 'Cancion Animal', '3:35', 'Rock Nacional', 'http://hsbnoticias.com/sites/default/files/2021-08/Soda-Stereo-Cancion-animal-primera-portada_0.jpg', 'https://www.youtube.com/watch?v=OX-us7PEfkc'),
(3, 'En la ciudad de la furia', 'Soda Stereo', 'Doble Vida', '4:49', 'Rock Nacional', 'https://i.ytimg.com/vi/-5u_iwszdHU/sddefault.jpg', 'https://www.youtube.com/watch?v=VoGwvVoaoCw'),
(4, 'Como Ali', 'Los Piojos', 'Maquina de Sangre', '3:32', 'Rock Nacional', 'https://m.media-amazon.com/images/I/91IPtJtElHL._SS500_.jpg', 'https://www.youtube.com/watch?v=lZCIDNEDqM8');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `FirstName` (`FirstName`),
  ADD UNIQUE KEY `LastName` (`LastName`);

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `titulo` (`titulo`),
  ADD UNIQUE KEY `imagen` (`imagen`) USING HASH;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `artists`
--
ALTER TABLE `artists`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `artists`
--
ALTER TABLE `artists`
  ADD CONSTRAINT `artists_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `canciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
