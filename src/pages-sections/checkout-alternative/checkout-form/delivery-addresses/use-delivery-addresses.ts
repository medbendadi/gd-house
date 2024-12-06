import { useState, useCallback } from "react";
// CUSTOM DATA MODEL
import { DeliveryAddress } from "models/Common";

export default function useDeliveryAddresses() {
  const [openModal, setOpenModal] = useState(false);
  const [editDeliveryAddress, setEditDeliveryAddress] = useState<DeliveryAddress | null>(null);

  const toggleModal = useCallback(() => setOpenModal((prev) => !prev), []);

  const handleDeleteDeliveryAddress = useCallback((id: number) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
    }
  }, []);

  const handleAddNewAddress = useCallback(() => {
    setEditDeliveryAddress(null);
    setOpenModal(true);
  }, []);

  const handleEditDeliveryAddress = useCallback((address: DeliveryAddress) => {
    setEditDeliveryAddress(address);
    setOpenModal(true);
  }, []);

  return {
    openModal,
    editDeliveryAddress,
    toggleModal,
    handleAddNewAddress,
    handleEditDeliveryAddress,
    handleDeleteDeliveryAddress
  };
}
