export const getLocationParams = (name: string): string | null => {
    const { searchParams } = new URL(window.location.href);
    return searchParams.get(name);
};