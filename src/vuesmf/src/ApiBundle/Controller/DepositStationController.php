<?php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\JsonResponse;

class DepositStationController extends Controller
{
    /**
     * Deposit Station Api
     *
     * @return object
     *
     * @Route("/patients", options={"expose"=true}, name="api_patients_ds")
     * @Method("GET")
     */
    public function getAction()
    {
        return new JsonResponse($this->container->get('api.random_generator')->generate());
    }
}
