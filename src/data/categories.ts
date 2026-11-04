export interface CategoryNode {
    label: string;
    children?: string[];
}

export const categories: CategoryNode[] = [
    { label: 'KHUYẾN MÃI & VOUCHER' },
    { label: 'THÁP TRỒNG – TRỤ TRỒNG' },
    { label: 'SỎI TRANG TRÍ' },
    { label: 'HÀNG RÀO NHỰA' },
    { label: 'ỐNG THÉP BỌC NHỰA' },
    { label: 'THIẾT BỊ TƯỚI TỰ ĐỘNG' },

    { label: 'ĐẤT SẠCH VÀ GIÁ THỂ' },
    { label: 'HẠT GIỐNG RAU HOA' },
    { label: 'VẬT TƯ TRỒNG LAN' },
    { label: 'THUỐC BẢO VỆ THỰC VẬT' },
    { label: 'PHÂN BÓN' },
    { label: 'NHÀ KÍNH – NHÀ MÀNG' },
    { label: 'THỦY SINH VÀ CÁ CẢNH' },
    { label: 'COMBO TIỆN ÍCH' },


    {
        label: 'CHẬU TRỒNG CÂY',
        children: ['Kệ trồng', 'Chậu vuông', 'Chậu chữ nhật', 'Chậu tròn', 'Chậu treo', 'Chậu ốp tường', 'Chậu trồng hoa hồng', 'Chậu loại khác']
    },
    {
        label: 'CÂY GIỐNG VÀ HOA CHẬU',
        children: ['Chậu rau gia vị', 'Cây con rau củ', 'Cây ăn trái', 'Cây có hoa']
    },
    {
        label: 'DỤNG CỤ LÀM VƯỜN',
        children: ['Dụng cụ tưới', 'Dụng cụ cắt tỉa', 'Dụng cụ làm đất', 'Dụng cụ khác']
    },
];