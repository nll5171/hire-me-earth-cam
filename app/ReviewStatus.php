<?php

namespace App;

enum ReviewStatus: int
{
    case FOR = 0;
    case AGAINST = 1;

    public function label(): string
    {
        return match ($this) {
            self::FOR => 'For',
            self::AGAINST => 'Against'
        };
    }

    public static function values(): array
    {
        return array_map(fn (ReviewStatus $status) => $status->value, self::cases());
    }
}
