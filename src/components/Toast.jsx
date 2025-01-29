import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../slices/toastSlice";

const ToastNotification = () => {
    const dispatch = useDispatch();
    const { showToast, info, success, error } = useSelector((state) => state.toast);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                dispatch(hideToast());
            }, 5000);

            return () => clearTimeout(timer); // Clean up the timeout when the component unmounts or showToast changes
        }
    }, [showToast, dispatch]);

    return (
        showToast && (
            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 space-y-2">
                {/* Info Alert */}
                {info && (
                    <div className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow-md">
                        ℹ️ {info}
                    </div>
                )}

                {/* Success Alert */}
                {success && (
                    <div className="bg-green-500 text-white text-sm px-4 py-2 rounded-md shadow-md">
                        ✅ {success}
                    </div>
                )}

                {/* Error Alert */}
                {error && (
                    <div className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow-md">
                        ❌ {error || 'Something went wrong. Please try again.'}
                    </div>
                )}
            </div>
        )
    );
};

export default ToastNotification;
