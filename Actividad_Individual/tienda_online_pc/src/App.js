// Importaciones de estilos CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/navigation.css';
import './styles/globals.css';
import './styles/cardsCategory.css';
import './styles/cardsBusqueda.css';
import './styles/cardsMenuCategory.css';
import './styles/detailsFormat.css';
import './styles/footer.css';

// Importaciones de React y hooks personalizados
import { useState, useEffect } from "react";
import { CategoryContext } from "./context/CategoryContext";
import { useMenuCategory } from "./hooks/useMenuCategory";

// Importaciones de componentes
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const PCBUILDS = [
  { id: "1", image: "/pc_build_example.png", description: "Intel Core i7 13gen\nMemoria Ram 8gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060\nMainboard Asrock x670\nFuente de poder 800w", shortDescription: "PC Build 1", price: "1500", route: "/pcbuilds/detalles" },
  { id: "2", image: "/pc_build_example.png", description: "Intel Core i7 13gen\nMemoria Ram 8gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060\nMainboard Asrock x670\nFuente de poder 800w", shortDescription: "PC Build 2", price: "1700", route: "/pcbuilds/detalles" },
  { id: "3", image: "/pc_build_example.png", description: "Intel Core i7 13gen\nMemoria Ram 16gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060\nMainboard Asrock x670\nFuente de poder 800w", shortDescription: "PC Build 3", price: "1800", route: "/pcbuilds/detalles" },
  { id: "4", image: "/pc_build_example.png", description: "Intel Core i7 13gen\nMemoria Ram 32gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060\nMainboard Asrock x670\nFuente de poder 800w", shortDescription: "PC Build 4", price: "1900", route: "/pcbuilds/detalles" },
  { id: "5", image: "/pc_build_example.png", description: "Intel Core i7 13gen\nMemoria Ram 64gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060\nMainboard Asrock x670\nFuente de poder 800w", shortDescription: "PC Build 5", price: "2200", route: "/pcbuilds/detalles" }
];

const LAPTOPS = [
  { id: "1", image: "/laptop_example.png", description: "Modelo ASUS TUF A17\nPantalla FHD 144hz 15.6''\nIntel Core i7 13gen\nMemoria Ram 8gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060", shortDescription: "Laptop Asus A17 - V1", price: "1200", route: "/laptops/detalles" },
  { id: "2", image: "/laptop_example.png", description: "Modelo ASUS TUF A17\nPantalla FHD 144hz 15.6''\nIntel Core i7 13gen\nMemoria Ram 8gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060", shortDescription: "Laptop Asus A17 - V2", price: "1300", route: "/laptops/detalles" },
  { id: "3", image: "/laptop_example.png", description: "Modelo ASUS TUF A17\nPantalla FHD 144hz 15.6''\nIntel Core i7 13gen\nMemoria Ram 16gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060", shortDescription: "Laptop Asus A17 - V3", price: "1400", route: "/laptops/detalles" },
  { id: "4", image: "/laptop_example.png", description: "Modelo ASUS TUF A17\nPantalla FHD 144hz 15.6''\nIntel Core i7 13gen\nMemoria Ram 32gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060", shortDescription: "Laptop Asus A17 - V4", price: "1500", route: "/laptops/detalles" },
  { id: "5", image: "/laptop_example.png", description: "Modelo ASUS TUF A17\nPantalla FHD 144hz 15.6''\nIntel Core i7 13gen\nMemoria Ram 64gb DDR5\nSSD 1TB 7200Mb/s\nGPU Nvidia RTX 4060", shortDescription: "Laptop Asus A17 - V5", price: "1600", route: "/laptops/detalles" }
];

const GPUS = [
  { id: "1", image: "/gpu_example.png", description: "Nvidia RTX 4060\n8GB GDDR6 2400Mhz", shortDescription: "Nvidia RTX 4060 - Serie 4000", price: "400", route: "/gpus/detalles" },
  { id: "2", image: "/gpu_example.png", description: "Nvidia RTX 4060 Ti\n16GB GDDR6 2450Mhz", shortDescription: "Nvidia RTX 4060 Ti - Serie 4000", price: "450", route: "/gpus/detalles" },
  { id: "3", image: "/gpu_example.png", description: "Nvidia RTX 4070\n16GB GDDR6 2700Mhz", shortDescription: "Nvidia RTX 4070 - Serie 4000", price: "600", route: "/gpus/detalles" },
  { id: "4", image: "/gpu_example.png", description: "Nvidia RTX 4070 Ti\n16GB GDDR6 2750Mhz", shortDescription: "Nvidia RTX 4070 Ti - Serie 4000", price: "650", route: "/gpus/detalles" },
  { id: "5", image: "/gpu_example.png", description: "Nvidia RTX 4080\n16GB GDDR6 3000Mhz", shortDescription: "Nvidia RTX 4080 - Serie 4000", price: "800", route: "/gpus/detalles" }
];

const FUENTES = [
  { id: "1", image: "/fuentes_example.png", description: "Corsair RM650\nPotencia 650w", shortDescription: "Corsair RM650 - Serie RM", price: "80", route: "/fuentes/detalles" },
  { id: "2", image: "/fuentes_example.png", description: "Corsair RM700\nPotencia 700w", shortDescription: "Corsair RM700 - Serie RM", price: "90", route: "/fuentes/detalles" },
  { id: "3", image: "/fuentes_example.png", description: "Corsair RM750\nPotencia 750w", shortDescription: "Corsair RM750 - Serie RM", price: "100", route: "/fuentes/detalles" },
  { id: "4", image: "/fuentes_example.png", description: "Corsair RM800\nPotencia 800w", shortDescription: "Corsair RM800 - Serie RM", price: "110", route: "/fuentes/detalles" },
  { id: "5", image: "/fuentes_example.png", description: "Corsair RM850\nPotencia 850w", shortDescription: "Corsair RM850 - Serie RM", price: "120", route: "/fuentes/detalles" }
];

const SSD = [
  { id: "1", image: "/ssd_example.png", description: "SSD Samsung EVO 980\n120GB PCI-Express 4.0 7200 Mb/s", shortDescription: "SSD Samsung NVMe - 120GB", price: "30", route: "/ssd/detalles" },
  { id: "2", image: "/ssd_example.png", description: "SSD Samsung EVO 980\n240GB PCI-Express 4.0 7200 Mb/s", shortDescription: "SSD Samsung NVMe - 240GB", price: "40", route: "/ssd/detalles" },
  { id: "3", image: "/ssd_example.png", description: "SSD Samsung EVO 980\n480GB PCI-Express 4.0 7200 Mb/s", shortDescription: "SSD Samsung NVMe - 480GB", price: "50", route: "/ssd/detalles" },
  { id: "4", image: "/ssd_example.png", description: "SSD Samsung EVO 980\n480GB PCI-Express 4.0 5000 Mb/s", shortDescription: "SSD Samsung NVMe - 480GB", price: "45", route: "/ssd/detalles" },
  { id: "5", image: "/ssd_example.png", description: "SSD Samsung EVO 980\n960GB PCI-Express 4.0 7200 Mb/s", shortDescription: "SSD Samsung NVMe - 960GB", price: "75", route: "/ssd/detalles" }
];

const ACCESORIOS = [
  { id: "1", image: "/mouse_example.png", description: "Mouse Razer RZ01", shortDescription: "Mouse Razer RZ01", price: "40", route: "/accesorios/detalles" },
  { id: "2", image: "/mouse_example.png", description: "Mouse Razer RZ02", shortDescription: "Mouse Razer RZ02", price: "50", route: "/accesorios/detalles" },
  { id: "3", image: "/mouse_example.png", description: "Mouse Razer RZ03", shortDescription: "Mouse Razer RZ03", price: "60", route: "/accesorios/detalles" },
  { id: "4", image: "/keyboard_example.png", description: "Teclado Razer R3U1", shortDescription: "Teclado Razer R3U1", price: "80", route: "/accesorios/detalles" },
  { id: "5", image: "/keyboard_example.png", description: "Teclado Razer R3U2", shortDescription: "Teclado Razer R3U2", price: "90", route: "/accesorios/detalles" }
];

function App() {

  const pcbuilds = useMenuCategory(PCBUILDS);
  const laptops = useMenuCategory(LAPTOPS);
  const gpus = useMenuCategory(GPUS);
  const fuentes = useMenuCategory(FUENTES);
  const ssd = useMenuCategory(SSD);
  const accesorios = useMenuCategory(ACCESORIOS);

  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (item) => {
    setCarrito((prevCarrito) => [...prevCarrito, item]);
  };

  const eliminarDelCarrito = (itemDescription) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.shortDescription !== itemDescription));
  };

  return (
    <>
      <CategoryContext.Provider value={{ pcbuilds, laptops, gpus, fuentes, ssd, accesorios, carrito, agregarAlCarrito, eliminarDelCarrito }}>
        <Header />
        <Navigation />
        <Footer />
      </CategoryContext.Provider>
    </>
  );
}

export default App;
