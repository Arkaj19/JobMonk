import React, { useState } from "react";
import {
  X,
  AlertTriangle,
  Trash2,
  Building2,
  Briefcase,
  Users,
} from "lucide-react";

const DeleteCompanyModal = ({
  isOpen,
  onClose,
  onConfirm,
  company,
  loading,
}) => {
  const [confirmText, setConfirmText] = useState("");
  const [step, setStep] = useState(1);

  const expectedText = `DELETE ${company?.name?.toUpperCase()}`;
  const isConfirmValid = confirmText === expectedText;

  const handleConfirm = () => {
    if (step === 1) {
      setStep(2);
    } else if (isConfirmValid) {
      onConfirm();
    }
  };

  const handleClose = () => {
    setStep(1);
    setConfirmText("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {step === 1 ? "Delete Company" : "Confirm Deletion"}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {step === 1
                  ? "This action cannot be undone"
                  : "Type to confirm"}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Building2 className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-900">
                    {company?.name}
                  </span>
                </div>
                <p className="text-sm text-red-700">
                  Deleting this company will permanently remove:
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-red-600">
                    <Briefcase className="w-4 h-4" />
                    <span>All job postings</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-red-600">
                    <Users className="w-4 h-4" />
                    <span>All job applications</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-red-600">
                    <Building2 className="w-4 h-4" />
                    <span>Company profile and data</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-amber-900">
                      Warning: This action is irreversible
                    </p>
                    <p className="text-xs text-amber-700 mt-1">
                      All associated data will be permanently deleted from our
                      servers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Final Confirmation
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  To confirm deletion, type{" "}
                  <span className="font-mono font-semibold text-red-600">
                    DELETE {company?.name?.toUpperCase()}
                  </span>{" "}
                  below:
                </p>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder={`Type: DELETE ${company?.name?.toUpperCase()}`}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono text-sm"
                  autoFocus
                />

                {confirmText && !isConfirmValid && (
                  <p className="text-xs text-red-500 flex items-center space-x-1">
                    <X className="w-3 h-3" />
                    <span>Text doesn't match. Please try again.</span>
                  </p>
                )}

                {isConfirmValid && (
                  <p className="text-xs text-green-600 flex items-center space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Confirmation text matches!</span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-2xl flex justify-between space-x-3">
          <button
            onClick={step === 1 ? handleClose : () => setStep(1)}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>

          <button
            onClick={handleConfirm}
            disabled={(step === 2 && !isConfirmValid) || loading}
            className={`flex-1 px-4 py-2.5 text-sm font-medium text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
              step === 2 && !isConfirmValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Deleting...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Trash2 className="w-4 h-4" />
                <span>{step === 1 ? "Continue" : "Delete Company"}</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCompanyModal;
