import { useContext } from 'react';
import { AuthContext } from 'src/common/contexts/auth-context';

export const useAuth = () => useContext(AuthContext);
