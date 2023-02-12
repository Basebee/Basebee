import { AppClient } from '@basebee/db';
import { atom } from 'jotai';
import { atomWithLocalStorage } from '~/utils/atomWithLocalStorage';

export const selectedAppClientAtom = atom<AppClient | null>(null);
