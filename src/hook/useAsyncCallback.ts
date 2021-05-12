import { useState } from 'react';

export function useAsyncCallback<T>(
    callback?: (val: T) => void
): [asyncSubmit: (val: T) => void, submitState: boolean, error: any] {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const asyncWrapper = async (values: T) => {
        if (!callback) {
            return;
        }
        try {
            setLoading(true);
            return await callback(values);
        } catch (error) {
            setError(error.errors)
        }
        finally {
            setLoading(false);
        }
    };
    return [asyncWrapper, loading, error];
}
