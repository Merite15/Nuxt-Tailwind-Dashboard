export const useUTableFilter = <T extends { [key: string]: any }>(q: { value: string; }, data: T[]): T[] => {
    if (!q.value) {
        return data;
    }

    const excludedProperties = ['created_at', 'updated_at', 'deleted_at'];

    return data.filter((element: T) => {
        const includesQuery = (obj: any): boolean => {
            return Object.entries(obj).some(([key, value]: [string, any]) => {
                if (excludedProperties.includes(key)) {
                    return false;
                }

                if (typeof value === 'string' && value.toLowerCase().includes(q.value.toLowerCase())) {
                    return true;
                }

                if (typeof value === 'object' && value !== null) {
                    return includesQuery(value);
                }

                return false;
            });
        };

        return includesQuery(element);
    });
};
