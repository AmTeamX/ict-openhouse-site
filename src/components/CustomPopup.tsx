import React from 'react'

interface CustomPopupProps {
    open: boolean
    message: string
    onClose: () => void
}

const CustomPopup: React.FC<CustomPopupProps> = ({ open, message, onClose }) => {
    if (!open) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg p-6 shadow-lg min-w-[300px] text-center">
                {/* Show message text */}
                <div className="mb-4 text-black text-base font-medium">
                    Please complete all required fields
                    before confirm.
                </div>
                <button
                    className="px-8 py-2 bg-ictTurquoise text-white bg-[#426442] rounded-xl "
                    onClick={onClose}
                >
                    OK
                </button>
            </div>
        </div>
    )
}

export default CustomPopup
