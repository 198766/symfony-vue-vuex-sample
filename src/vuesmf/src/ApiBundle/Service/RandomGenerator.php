<?php

namespace ApiBundle\Service;

class RandomGenerator
{
    const COUNT = 2000;

    public function generate()
    {
        $fixture = [];
        $startData["patient"] = [
           [
                "id" => 1,
                "label" => "Vier Testfall",
                "group" => "Mende, Manuela",
                "status" => 1,
                "details" => [
                    "email" => "test@test.de",
                    "tel" => "1234"
                ]
            ],
            [
                "id" => 2,
                "label" => "Beata Brysz",
                "group" => "Ittri, Mulham",
                "status" => 1,
                "details" => [
                    "email" => "test@test.de",
                    "tel" => "1234"
                ]
            ],
            [
                "id" => 3,
                "label" => "Claus Nolte",
                "group" => "Ittri, Mulham",
                "status" => 1,
                "details" => [
                    "email" => "test@test.de",
                    "tel" => "1234"
                ]
            ],
            [
                "id" => 4,
                "label" => "Andrea Kuckuck",
                "group" => "Mende, Manuela",
                "status" => 1,
                "details" => [
                    "email" => "test@test.de",
                    "tel" => "1234"
                ]
            ],
            [
                "id" => 5,
                "label" => "Frank Weigel",
                "group" => "Mende, Manuela",
                "status" => 1,
                "details" => [
                    "email" => "test@test.de",
                    "tel" => "1234"
                ]
            ],
            [
                "id" => 6,
                "label" => "Marie Meier",
                "group" => "Ittri, Mulham",
                "status" => 1,
                "details" => [
                    "email" => "test@test.de",
                    "tel" => "1234"
                ]
            ],
            [
                "id" => 7,
                "label" => "Heike Otto",
                "group" => "Ittri, Mulham",
                "status" => 0,
                "details" => [
                    "email" => "test@test.de",
                    "tel" => "1234"
                ]
            ]
        ];


        $patientCollection = $startData['patient'];
        $paramsCount = count($patientCollection) - 1;

        for ($i = 0; $i < self::COUNT; $i++) {
            $fixture[] = [
                "id" => $i,
                "label" => $patientCollection[mt_rand(0, $paramsCount)]["label"],
                "group" => $patientCollection[mt_rand(0, $paramsCount)]["group"],
                "status" => $patientCollection[mt_rand(0, $paramsCount)]["status"],
                "details" => $patientCollection[mt_rand(0, $paramsCount)]["details"]
            ];
        }


        return ['patient' => $fixture];
    }

}