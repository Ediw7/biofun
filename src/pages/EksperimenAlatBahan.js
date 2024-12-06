import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Data alat, bahan, dan darah
const alatList = [
  { nama: "Pipet Tetes", image: "https://cdn.pixabay.com/photo/2016/03/31/19/46/dropper-1295283_640.png" },
  { nama: "Tusuk Gigi", image: "https://png.pngtree.com/png-clipart/20231212/original/pngtree-wooden-toothpicks-in-a-glass-the-isolated-background-to-brush-teeth-png-image_13821834.png" },
  { nama: "Kaca Preparat", image: "https://images.tokopedia.net/img/cache/200-square/product-1/2019/3/20/129383/129383_6d8ca554-2b8d-4a59-9f10-4b720b72be9d.jpg" },
  { nama: "Mortar & Pistil", image: "https://www.thegifthunter.co.nz/wp-content/uploads/Pestle-and-Mortar-400x480.jpg" },
  { nama: "Tabung Reaksi", image: "https://static-siplah.blibli.com/data/images/SCFA-0031-00289/1dcc870e-ac8a-42e6-b8c3-c4279d67bb2f.jpeg" },
  { nama: "Erlenmeyer", image: "https://www.carlroth.com/medias/X734-01-1000Wx1000H?context=bWFzdGVyfGltYWdlc3wzMjI3MnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobVl5OW9OalV2T1RBd01EYzFNREF5TWpZNE5pNXFjR2N8OGQxOTBkZjFjYjZlNWQ1ZWFlMDFkOTU3MTkyNzc3ZmQxMGVhYTNkMWY3ZTQxYjdlOWI0M2VjODM4ZDU5YjhiNQ" },
];

const bahanList = [
  { nama: "Serum Anti-A", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-A.png" },
  { nama: "Serum Anti-B", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-B.png" },
  { nama: "Serum Anti-AB", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-AB.png" },
  { nama: "Serum Anti-D", image: "http://amyfarma.com/wp-content/uploads/2022/08/Anti-D.png" },
  { nama: "Alkohol 70%", image: "https://storage.googleapis.com/rxstorage/Product/large/Apotek_Online_Farmaku_com_Alkohol_70_Afiat_100_ml.jpg" },
  { nama: "Biuret", image: "https://images.tokopedia.net/img/cache/700/product-1/2016/2/1/2446149/2446149_484c6515-a66c-4aaa-bb29-f54abc0ba05e.jpg" },
];

const darahList = [
  { nama: "Darah Pasien 1", image: '/gambar/blood.png' },
  { nama: "Darah Pasien 2", image: '/gambar/blood.png' },
  { nama: "Darah Pendonor 1", image: '/gambar/blood.png' },
  { nama: "Darah Pendonor 2", image: '/gambar/blood.png' },
];

const EksperimenAlatBahan = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState([]);
  const [popupTitle, setPopupTitle] = useState("");

  // Track which items are clicked to block them
  const [selectedItems, setSelectedItems] = useState({});

  const navigate = useNavigate(); // Initialize the navigate function from useNavigate

  const showAlatPopup = () => {
    setPopupTitle("Daftar Alat");
    setPopupContent([
      { nama: "Pipet Tetes" },
      { nama: "Tusuk Gigi" },
      { nama: "Kaca Preparat" },
    ]);
    setPopupVisible(true);
  };

  const showBahanPopup = () => {
    setPopupTitle("Daftar Bahan");
    setPopupContent([
      { nama: "Serum Anti-A" },
      { nama: "Serum Anti-B" },
      { nama: "Serum Anti-AB" },
      { nama: "Serum Anti-O" },
      { nama: "Darah Pasien 1 & 2" },
      { nama: "Darah Pendonor 1 & 2" },
    ]);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  // Toggle selection when an item is clicked
  const handleClick = (itemName) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName], // Toggle true/false
    }));
  };

  // Handle navigation to another page (Eksperimen page)
  const handleNavigate = () => {
    navigate("/eksperimen-puzzel"); // Navigate to /eksperimen route
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-500 to-blue-50 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        Alat Bahan Eksperimen Golongan Darah 🔬
      </h1>
      <p className="text-lg text-white mb-6">
        Temukan Alat dan Bahan yang sesuai dengan Instruksi!
      </p>

      <div className="absolute top-4 left-4 flex gap-4 mb-8">
        <button className="p-2" onClick={showAlatPopup}>
          <img src="https://cdn.icon-icons.com/icons2/3871/PNG/512/menu_icon_244496.png" alt="Alat" className="w-14 h-14" />
          <span className="text-white font-semibold">Alat</span>
        </button>

        <button className="p-2" onClick={showBahanPopup}>
          <img src="https://cdn.icon-icons.com/icons2/3871/PNG/512/menu_icon_244496.png" alt="Bahan" className="w-14 h-14" />
          <span className="text-white font-semibold">Bahan</span>
        </button>
      </div>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="text-xl font-bold text-green-600 mb-4">{popupTitle}</h3>
            <ul className="list-disc pl-5">
              {popupContent.map((item, index) => (
                <li key={index} className="text-gray-800 mb-2">{item.nama}</li>
              ))}
            </ul>
            <button className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600" onClick={closePopup}>
              Tutup
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-8 w-full px-4 items-center justify-center">
        {/* Card Alat */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-500 max-w-7xl h-auto flex flex-col items-center justify-start">
          <h3 className="text-lg font-bold text-green-600 mb-4">Alat</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {alatList.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center w-40 cursor-pointer ${selectedItems[item.nama] ? 'bg-blue-100' : ''}`}
                onClick={() => handleClick(item.nama)}
              >
                <div className={`w-32 h-32 object-contain mb-2 ${selectedItems[item.nama] ? 'border-4 border-blue-500' : ''}`}>
                  <img src={item.image} alt={item.nama} className="w-full h-full object-contain" />
                </div>
                <p className={`text-gray-600 text-xs text-center ${selectedItems[item.nama] ? 'font-bold' : ''}`}>{item.nama}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card Bahan */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-500 max-w-7xl h-auto flex flex-col items-center justify-start">
        <h3 className="text-lg font-bold text-green-600 mb-4">Bahan</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {bahanList.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center w-40 cursor-pointer ${selectedItems[item.nama] ? 'bg-blue-100' : ''}`}
                onClick={() => handleClick(item.nama)}
              >
                <div className={`w-32 h-32 object-contain mb-2 ${selectedItems[item.nama] ? 'border-4 border-blue-500' : ''}`}>
                  <img src={item.image} alt={item.nama} className="w-full h-full object-contain" />
                </div>
                <p className={`text-gray-600 text-xs text-center ${selectedItems[item.nama] ? 'font-bold' : ''}`}>{item.nama}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Card Darah */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-500 max-w-7xl h-auto flex flex-col items-center justify-start">
          <h3 className="text-lg font-bold text-green-600 mb-4">Darah</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {darahList.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center w-40 cursor-pointer ${selectedItems[item.nama] ? 'bg-blue-100' : ''}`}
                onClick={() => handleClick(item.nama)}
              >
                <div className={`w-32 h-32 object-contain mb-2 ${selectedItems[item.nama] ? 'border-4 border-blue-500' : ''}`}>
                  <img src={item.image} alt={item.nama} className="w-full h-full object-contain" />
                </div>
                <p className={`text-gray-600 text-xs text-center ${selectedItems[item.nama] ? 'font-bold' : ''}`}>{item.nama}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button Mulai Eksperimen */}
        <button
          onClick={handleNavigate}  // Trigger the navigate function when the button is clicked
          className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
        >
          Mulai Eksperimen
        </button>
      </div>
    </div>
  );
};

export default EksperimenAlatBahan;
