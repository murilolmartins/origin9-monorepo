import {
  ListUsersControllerFactory,
  SignUpControllerFactory
} from '../factories';

import { expressControllerAdapter } from '@/shared/infra/adapters/express-controller.adapter';
import { Router } from 'express';

const router = Router();

router.post('', expressControllerAdapter(SignUpControllerFactory()));
router.get('', expressControllerAdapter(ListUsersControllerFactory()));

export default router;
